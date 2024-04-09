import { User, Message, Chat } from "../types/types";
import AstroIcon from "../assets/AstroIcon.png";

export const myAccount: User = {
  id: "user-10",
  name: "Sergio",
  description: "Hola soy Sergio",
  avatar: AstroIcon,
}

export const usuariosRandom: User[] = [
  {
    id: "user-1",
    name: "Juan",
    description: "Usuario activo",
    avatar: AstroIcon,
  },
  {
    id: "user-2",
    name: "María",
    description: "Usuario premium",
    avatar: AstroIcon,
  },
  {
    id: "user-3",
    name: "Carlos",
    description: "Nuevo usuario",
    avatar: AstroIcon,
  },
  {
    id: "user-4",
    name: "Laura",
    description: "Entusiasta de la tecnología",
    avatar: AstroIcon,
  },
  {
    id: "user-5",
    name: "Pedro",
    description: "Amante de los viajes",
    avatar: AstroIcon,
  },
  {
    id: "user-6",
    name: "Ana",
    description: "Apasionada por la música",
    avatar: AstroIcon,
  },
  {
    id: "user-7",
    name: "Roberto",
    description: "Fanático del deporte",
    avatar: AstroIcon,
  },
  {
    id: "user-8",
    name: "Sofía",
    description: "Amante de la lectura",
    avatar: AstroIcon,
  },
  {
    id: "user-9",
    name: "Luis",
    description: "Interesado en la ciencia",
    avatar: AstroIcon,
  },
];

export const mensajesRandom: Message[] = usuariosRandom.map((usuario) => ({
  id: `message-${usuariosRandom.indexOf(usuario)}`,
  text: `Hola soy ${usuario.name}, mucho gusto. Soy nuevo en la plataforma.`,
  user: usuario,
  createdAt: new Date(),
  updatedAt: new Date(),
  isRead: false,
  deletedAt: null,
  isDeleted: false,
  target: usuariosRandom.indexOf(usuario) + 1
}));

const myAnswer:Message ={
  id: "message-10",
  text: "Hola soy Sergio, un gusto saber que te uniste a mi plataforma, bienvenido!",
  user: myAccount,
  createdAt: new Date(),
  updatedAt: new Date(),
  isRead: false,
  deletedAt: null,
  isDeleted: false,
  target: usuariosRandom.indexOf(myAccount) + 1
}

export const Chats: Chat[] = usuariosRandom.map((usuario, index) => ({
  id: index + 1,
  members: [usuario, myAccount],
  messages: [mensajesRandom[index],myAnswer],
}));


