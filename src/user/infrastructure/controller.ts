import { Request, Response } from "express";
import { registerNewUser, loginUser, mostrarUsers, actualizarUser, eliminarUser } from "../application/service";
import { handleHttp } from "../application/error.handle";
import { RequestExt } from "../domain/req-ext";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });

  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(403);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const response = await mostrarUsers();
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_UserS', e);
  }
};

const putUser = async (req: RequestExt, res: Response) => {
  try {
      const { params, body, files } = req;
      const { id } = params;

      if (files && (files as Express.Multer.File[]).length > 0) {
          const imagenes = (files as Express.Multer.File[]).map(file => ({
              fileName: file.filename,
              path: file.path,
          }));
          body.imagenes = imagenes;
      }

      const response = await actualizarUser(id, body);
      res.send(response);
  } catch (e) {
      handleHttp(res, 'ERROR_UPDATE_User');
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const response = await eliminarUser(id);
      res.send(response);
  } catch (e) {
      handleHttp(res, 'ERROR_DELETE_User');
  }
};

export { loginCtrl, registerCtrl, getUsers, putUser, deleteUser };