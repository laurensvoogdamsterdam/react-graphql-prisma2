import { isAuthenticated } from "../../../utils";
import { createWriteStream } from "fs";
import {
  GraphQLUpload,
  graphqlUploadExpress, // A Koa implementation is also exported.
} from "graphql-upload";
import { finished } from "stream/promises";
import { Readable } from "stream";

const uploadDir = "images";

const storeUpload = async ({ stream, filename }): Promise<any> => {
  const path = `${uploadDir}/${filename}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ path }))
      .on("error", reject)
  );
};

const processUpload = async (upload) => {
  const { createReadStream, filename, mimetype, encoding } = await upload;
  const stream = createReadStream();
  const { path } = await storeUpload({ stream, filename });
  return path;
};

export default {
  // Upload: GraphQLUpload,
  Mutation: {
    upload: async (_, args, { request, prisma }) => {
      isAuthenticated(request);
      const { user } = request;
      const { body, caption, files, location } = args;
      const post = await prisma.post.create({
        data: {
          body,
          caption,
          location,
          user: { connect: { id: user } },
        },
      });
      await Promise.all(
        files?.map(async (file) => {
          const url = await processUpload(file);
          await prisma.file.create({
            data: {
              url,
              post: {
                connect: {
                  id: post.id,
                },
              },
            },
          });
        })
      );
      return post;
    },
  },
};
