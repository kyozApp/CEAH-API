import { Auth, User } from "../domain/interface";
import UserModel from "../domain/model";
import { encrypt, verified } from "./bcrypt.handle";
import { generateToken } from "./jwt.handle";

const registerNewUser = async ({ email, password, name, description }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
    description,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(checkIs.email);
  const data = {
    token,
    user: checkIs,
  };
  return data;
};

const mostrarUsers = async () => {
  const users = await UserModel.find();
  return users;
};

const actualizarUser = async (id: string, data: User) => {
  const responseUpdate = await UserModel.findByIdAndUpdate(id, data, { new: true });
  return responseUpdate;
};

const eliminarUser = async (id: string) => {
  const responseDelete = await UserModel.deleteOne({ _id: id });
  return responseDelete;
};

export { registerNewUser, loginUser, mostrarUsers, actualizarUser, eliminarUser };