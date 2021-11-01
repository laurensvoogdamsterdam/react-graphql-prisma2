import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum Actions {
  Edit = "EDIT",
  Delete = "DELETE",
}

export type Comment = {
  __typename?: "Comment";
  id: Scalars["ID"];
  text: Scalars["String"];
  user: User;
  post: Post;
  createdAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
  isLiked: Scalars["Boolean"];
  likeCount: Scalars["Int"];
};

export type File = {
  __typename?: "File";
  url: Scalars["String"];
  name: Scalars["String"];
  type: Scalars["String"];
  id: Scalars["ID"];
  post: Post;
  createdAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type Like = {
  __typename?: "Like";
  id: Scalars["ID"];
  user: User;
  post: Post;
  createdAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type Message = {
  __typename?: "Message";
  id: Scalars["ID"];
  text: Scalars["String"];
  from: User;
  to: User;
  room: Room;
  createdAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addComment: Comment;
  toggleLike: Scalars["Boolean"];
  sendMessage?: Maybe<Message>;
  editPost: Post;
  upload: Post;
  confirmSecret: Scalars["String"];
  editUser: User;
  follow?: Maybe<Scalars["Boolean"]>;
  requestSecret: Scalars["Boolean"];
  signinUser: User;
  signoffUser: User;
  signoutUser: User;
  signupUser: User;
  unfollow: Scalars["Boolean"];
  viewPost: Scalars["Boolean"];
};

export type MutationAddCommentArgs = {
  text: Scalars["String"];
  postId: Scalars["String"];
};

export type MutationToggleLikeArgs = {
  postId: Scalars["Int"];
};

export type MutationSendMessageArgs = {
  roomId?: Maybe<Scalars["String"]>;
  message: Scalars["String"];
  toId?: Maybe<Scalars["String"]>;
};

export type MutationEditPostArgs = {
  id: Scalars["String"];
  caption?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  actions: Actions;
};

export type MutationUploadArgs = {
  body: Scalars["String"];
  caption?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  files?: Maybe<Array<Scalars["Upload"]>>;
};

export type MutationConfirmSecretArgs = {
  secret: Scalars["String"];
  email: Scalars["String"];
};

export type MutationEditUserArgs = {
  username?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastNmae?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
};

export type MutationFollowArgs = {
  id: Scalars["Int"];
};

export type MutationRequestSecretArgs = {
  email: Scalars["String"];
};

export type MutationSigninUserArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignoutUserArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignupUserArgs = {
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
};

export type MutationUnfollowArgs = {
  id: Scalars["String"];
};

export type MutationViewPostArgs = {
  postId: Scalars["Int"];
};

export type Post = {
  __typename?: "Post";
  id: Scalars["ID"];
  body: Scalars["String"];
  location?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  user: User;
  files: Array<File>;
  likes: Array<Like>;
  views: Array<View>;
  comments: Array<Comment>;
  isLiked: Scalars["Boolean"];
  likeCount: Scalars["Int"];
  viewCount: Scalars["Int"];
  commentCount: Scalars["Int"];
  createdAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  allPosts: Array<Post>;
  searchPost: Array<Post>;
  seeFeed: Array<Post>;
  seeFullPost: Post;
  seeRoom: Room;
  seeRooms: Array<Room>;
  allUsers: Array<User>;
  me: User;
  searchUser: Array<User>;
  seeUser: User;
  userById: User;
};

export type QuerySearchPostArgs = {
  term: Scalars["String"];
};

export type QuerySeeFullPostArgs = {
  id: Scalars["String"];
};

export type QuerySeeRoomArgs = {
  id: Scalars["String"];
};

export type QuerySearchUserArgs = {
  term: Scalars["String"];
};

export type QuerySeeUserArgs = {
  username: Scalars["String"];
};

export type QueryUserByIdArgs = {
  id: Scalars["String"];
};

export type Room = {
  __typename?: "Room";
  id: Scalars["ID"];
  participants: Array<User>;
  messages: Array<Message>;
  createdAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  newMessage: Message;
};

export type SubscriptionNewMessageArgs = {
  roomId: Scalars["String"];
};

export type UploadInput = {
  body: Scalars["String"];
  caption?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  files?: Maybe<Array<Scalars["Upload"]>>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  avatar?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  username: Scalars["String"];
  email: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  fullName?: Maybe<Scalars["String"]>;
  isFollowing: Scalars["Boolean"];
  isSelf: Scalars["Boolean"];
  bio?: Maybe<Scalars["String"]>;
  following: Array<User>;
  followingCount: Scalars["Int"];
  followers: Array<User>;
  messagesFrom: Array<Message>;
  messagesTo: Array<Message>;
  followersCount: Scalars["Int"];
  posts: Array<Post>;
  postsCount: Scalars["Int"];
  likes: Array<Like>;
  comments: Array<Comment>;
  rooms: Array<Room>;
  loginSecret: Scalars["String"];
  createdAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type View = {
  __typename?: "View";
  id: Scalars["ID"];
  user: User;
  post: Post;
  createdAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type ToggleLikeMutationVariables = Exact<{
  postId: Scalars["Int"];
}>;

export type ToggleLikeMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "toggleLike"
>;

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: "Query" } & {
  me: { __typename?: "User" } & Pick<
    User,
    | "id"
    | "isSelf"
    | "username"
    | "email"
    | "avatar"
    | "bio"
    | "postsCount"
    | "followingCount"
    | "followersCount"
  > & {
      following: Array<
        { __typename?: "User" } & Pick<
          User,
          "id" | "avatar" | "bio" | "username"
        >
      >;
      followers: Array<
        { __typename?: "User" } & Pick<
          User,
          "id" | "avatar" | "bio" | "username"
        >
      >;
      posts: Array<{ __typename?: "Post" } & Pick<Post, "id" | "body">>;
      comments: Array<{ __typename?: "Comment" } & Pick<Comment, "id">>;
    };
};

export type SeeFeedQueryVariables = Exact<{ [key: string]: never }>;

export type SeeFeedQuery = { __typename?: "Query" } & {
  seeFeed: Array<
    { __typename?: "Post" } & Pick<
      Post,
      "id" | "body" | "viewCount" | "isLiked" | "commentCount" | "likeCount"
    > & {
        files: Array<{ __typename?: "File" } & Pick<File, "url">>;
        user: { __typename?: "User" } & Pick<
          User,
          "id" | "avatar" | "email" | "username"
        >;
        comments: Array<
          { __typename?: "Comment" } & Pick<Comment, "id" | "text"> & {
              user: { __typename?: "User" } & Pick<User, "id" | "avatar">;
            }
        >;
      }
  >;
};

export type SigninUserMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SigninUserMutation = { __typename?: "Mutation" } & {
  signinUser: { __typename?: "User" } & Pick<
    User,
    "id" | "username" | "email" | "avatar" | "bio" | "token"
  >;
};

export type SignupUserMutationVariables = Exact<{
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignupUserMutation = { __typename?: "Mutation" } & {
  signupUser: { __typename?: "User" } & Pick<
    User,
    "id" | "username" | "email" | "avatar" | "bio" | "token"
  >;
};

export type UploadMutationVariables = Exact<{
  body: Scalars["String"];
  caption?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  files?: Maybe<Array<Scalars["Upload"]> | Scalars["Upload"]>;
}>;

export type UploadMutation = { __typename?: "Mutation" } & {
  upload: { __typename?: "Post" } & Pick<
    Post,
    "id" | "body" | "caption" | "location"
  > & { files: Array<{ __typename?: "File" } & Pick<File, "id" | "url">> };
};

export type ViewPostMutationVariables = Exact<{
  postId: Scalars["Int"];
}>;

export type ViewPostMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "viewPost"
>;

export const ToggleLikeDocument = gql`
  mutation ToggleLike($postId: Int!) {
    toggleLike(postId: $postId)
  }
`;
export type ToggleLikeMutationFn = Apollo.MutationFunction<
  ToggleLikeMutation,
  ToggleLikeMutationVariables
>;

/**
 * __useToggleLikeMutation__
 *
 * To run a mutation, you first call `useToggleLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutation, { data, loading, error }] = useToggleLikeMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useToggleLikeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ToggleLikeMutation,
    ToggleLikeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ToggleLikeMutation, ToggleLikeMutationVariables>(
    ToggleLikeDocument,
    options
  );
}
export type ToggleLikeMutationHookResult = ReturnType<
  typeof useToggleLikeMutation
>;
export type ToggleLikeMutationResult =
  Apollo.MutationResult<ToggleLikeMutation>;
export type ToggleLikeMutationOptions = Apollo.BaseMutationOptions<
  ToggleLikeMutation,
  ToggleLikeMutationVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      id
      isSelf
      username
      email
      avatar
      bio
      following {
        id
        avatar
        bio
        username
      }
      followers {
        id
        avatar
        bio
        username
      }
      posts {
        id
        body
      }
      postsCount
      followingCount
      followersCount
      comments {
        id
      }
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SeeFeedDocument = gql`
  query SeeFeed {
    seeFeed {
      id
      body
      viewCount
      isLiked
      commentCount
      likeCount
      files {
        url
      }
      user {
        id
        avatar
        email
        username
      }
      comments {
        id
        text
        user {
          id
          avatar
        }
      }
    }
  }
`;

/**
 * __useSeeFeedQuery__
 *
 * To run a query within a React component, call `useSeeFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useSeeFeedQuery(
  baseOptions?: Apollo.QueryHookOptions<SeeFeedQuery, SeeFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SeeFeedQuery, SeeFeedQueryVariables>(
    SeeFeedDocument,
    options
  );
}
export function useSeeFeedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SeeFeedQuery, SeeFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SeeFeedQuery, SeeFeedQueryVariables>(
    SeeFeedDocument,
    options
  );
}
export type SeeFeedQueryHookResult = ReturnType<typeof useSeeFeedQuery>;
export type SeeFeedLazyQueryHookResult = ReturnType<typeof useSeeFeedLazyQuery>;
export type SeeFeedQueryResult = Apollo.QueryResult<
  SeeFeedQuery,
  SeeFeedQueryVariables
>;
export const SigninUserDocument = gql`
  mutation SigninUser($email: String!, $password: String!) {
    signinUser(email: $email, password: $password) {
      id
      username
      email
      avatar
      bio
      token
    }
  }
`;
export type SigninUserMutationFn = Apollo.MutationFunction<
  SigninUserMutation,
  SigninUserMutationVariables
>;

/**
 * __useSigninUserMutation__
 *
 * To run a mutation, you first call `useSigninUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinUserMutation, { data, loading, error }] = useSigninUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSigninUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SigninUserMutation,
    SigninUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SigninUserMutation, SigninUserMutationVariables>(
    SigninUserDocument,
    options
  );
}
export type SigninUserMutationHookResult = ReturnType<
  typeof useSigninUserMutation
>;
export type SigninUserMutationResult =
  Apollo.MutationResult<SigninUserMutation>;
export type SigninUserMutationOptions = Apollo.BaseMutationOptions<
  SigninUserMutation,
  SigninUserMutationVariables
>;
export const SignupUserDocument = gql`
  mutation SignupUser($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      id
      username
      email
      avatar
      bio
      token
    }
  }
`;
export type SignupUserMutationFn = Apollo.MutationFunction<
  SignupUserMutation,
  SignupUserMutationVariables
>;

/**
 * __useSignupUserMutation__
 *
 * To run a mutation, you first call `useSignupUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupUserMutation, { data, loading, error }] = useSignupUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupUserMutation,
    SignupUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignupUserMutation, SignupUserMutationVariables>(
    SignupUserDocument,
    options
  );
}
export type SignupUserMutationHookResult = ReturnType<
  typeof useSignupUserMutation
>;
export type SignupUserMutationResult =
  Apollo.MutationResult<SignupUserMutation>;
export type SignupUserMutationOptions = Apollo.BaseMutationOptions<
  SignupUserMutation,
  SignupUserMutationVariables
>;
export const UploadDocument = gql`
  mutation Upload(
    $body: String!
    $caption: String
    $location: String
    $files: [Upload!]
  ) {
    upload(body: $body, caption: $caption, location: $location, files: $files) {
      id
      body
      caption
      location
      files {
        id
        url
      }
    }
  }
`;
export type UploadMutationFn = Apollo.MutationFunction<
  UploadMutation,
  UploadMutationVariables
>;

/**
 * __useUploadMutation__
 *
 * To run a mutation, you first call `useUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadMutation, { data, loading, error }] = useUploadMutation({
 *   variables: {
 *      body: // value for 'body'
 *      caption: // value for 'caption'
 *      location: // value for 'location'
 *      files: // value for 'files'
 *   },
 * });
 */
export function useUploadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UploadMutation,
    UploadMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UploadMutation, UploadMutationVariables>(
    UploadDocument,
    options
  );
}
export type UploadMutationHookResult = ReturnType<typeof useUploadMutation>;
export type UploadMutationResult = Apollo.MutationResult<UploadMutation>;
export type UploadMutationOptions = Apollo.BaseMutationOptions<
  UploadMutation,
  UploadMutationVariables
>;
export const ViewPostDocument = gql`
  mutation ViewPost($postId: Int!) {
    viewPost(postId: $postId)
  }
`;
export type ViewPostMutationFn = Apollo.MutationFunction<
  ViewPostMutation,
  ViewPostMutationVariables
>;

/**
 * __useViewPostMutation__
 *
 * To run a mutation, you first call `useViewPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useViewPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [viewPostMutation, { data, loading, error }] = useViewPostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useViewPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ViewPostMutation,
    ViewPostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ViewPostMutation, ViewPostMutationVariables>(
    ViewPostDocument,
    options
  );
}
export type ViewPostMutationHookResult = ReturnType<typeof useViewPostMutation>;
export type ViewPostMutationResult = Apollo.MutationResult<ViewPostMutation>;
export type ViewPostMutationOptions = Apollo.BaseMutationOptions<
  ViewPostMutation,
  ViewPostMutationVariables
>;
