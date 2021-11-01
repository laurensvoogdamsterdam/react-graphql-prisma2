import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import shortid from "shortid";
import styles from "./createPostStyles";
import { combineData } from "../../../utils/dataHelper";
import { AuthContext } from "../../../contexts";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { ReactNativeFile } from "apollo-upload-client";
import { useUploadMutation } from "../../../hooks/graphql";

function generateRNFile(image, name) {
  return new ReactNativeFile({
    uri: image.uri,
    name: `${Date.now()}-${shortid.generate()}`,
    type: "image/jpeg",
  });
}

export function CreatePost() {
  const { state, dispatch } = useContext(AuthContext);
  const { members } = state;
  const [data, setData] = useState({
    newProject: { title: "", description: "", selectedMembers: [] },
  });
  const [images, setImages] = useState([]);
  const [upload] = useUploadMutation();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImages([...images, result]);
    }
  };

  const handleUpload = async () => {
    const uploads = images.map((image) => {
      return generateRNFile(image, `picture-${Date.now()}`);
    });
    try {
      const response = await upload({
        variables: {
          body: "Test upload",
          caption: "Another test",
          location: "Amsterdam",
          files: uploads,
        },
      });
    } catch (e) {
      // @TODO
    }
    // @TODO
  };

  const handleSetValue = (field, value) => {
    let { newProject } = data;
    if (field === "selectedMembers") {
      let { selectedMembers } = newProject;
      const foundIndex = selectedMembers?.findIndex((a) => a?.id === value?.id);
      if (foundIndex === -1) {
        selectedMembers.push(value);
      } else {
        selectedMembers = selectedMembers.filter((a) => a?.id !== value?.id);
      }
      newProject["selectedMembers"] = selectedMembers;
    } else {
      newProject[field] = value;
    }

    setData(
      combineData(data, {
        newProject,
      })
    );
  };

  const isSelectedMember = (member) => {
    let value;
    let { selectedMembers } = data?.newProject;
    const foundIndex = selectedMembers?.findIndex(
      (a) => a?.id?.toLowerCase() == member?.id?.toLowerCase()
    );
    if (foundIndex > -1) {
      value = true;
    }
    return value;
  };

  const handleBottomModal = (bottomModal) => {
    dispatch({
      type: "toggleBottomModal",
      payload: { bottomModal },
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}>
        <Text style={{ display: "flex" }}>Create Post</Text>
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={() => handleBottomModal(null)}>
          <Feather style={{ padding: 20 }} size={20} name='x' />
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder='Title'
        placeholderTextColor='gray'
        style={styles.textInput}
        onChangeText={(text) => handleSetValue("title", text)}
      />
      <TextInput
        placeholder='Description'
        placeholderTextColor='gray'
        style={styles.textInput}
        onChangeText={(text) => handleSetValue("description", text)}
      />
      <View>
        <Button title='Pick an image from camera roll' onPress={pickImage} />
        {images?.map((image) => {
          return (
            <Image
              key={`${image.uri}`}
              source={{ uri: image.uri }}
              style={{ width: 200, height: 200 }}
            />
          );
        })}
      </View>
      <View style={styles.teamTextWrapper}>
        <Text style={styles.teamText}>Select Members</Text>
      </View>

      <View style={styles.teamSection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.teamWrapper}>
            {members?.map((member) => (
              <TouchableOpacity
                key={shortid.generate()}
                style={[
                  styles.memberWrapper,
                  isSelectedMember(member) ? styles.activeTeamWrapper : null,
                ]}
                onPress={() => handleSetValue("selectedMembers", member)}>
                <Image
                  style={styles.memberPhoto}
                  source={{ uri: member?.photo }}
                />
                <Text
                  style={[
                    styles.memberName,
                    isSelectedMember(member) ? styles.activeMemberName : null,
                  ]}
                  numberOfLines={2}
                  ellipsizeMode='tail'>
                  {member?.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.btnWrapper}
        onPress={() => handleUpload()}>
        <Text style={styles.btnText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
}
