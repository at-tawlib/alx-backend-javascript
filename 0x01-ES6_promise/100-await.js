import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photoUpload = await uploadPhoto();
  const userCreate = await createUser();
  return {
    photo: photoUpload,
    user: userCreate,
  };
}
