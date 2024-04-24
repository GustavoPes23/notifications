import AvatarMark from "../assets/images/avatar-mark-webber.webp";
import AvatarAngela from "../assets/images/avatar-angela-gray.webp" ;
import AvatarJacob from "../assets/images/avatar-jacob-thompson.webp";
import AvatarRizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import AvatarKimberly from "../assets/images/avatar-kimberly-smith.webp";
import AvatarNathan from "../assets/images/avatar-nathan-peterson.webp";
import AvatarAnna from "../assets/images/avatar-anna-kim.webp";
import ExtraImage from "../assets/images/image-chess.webp";

import { v4 as uuid } from 'uuid';

export interface User {
  readonly id: string;
  readonly name: string;
  readonly avatar: string;
  readonly action: string;
  readonly emphasis?: string;
  readonly empashisColor?: string;
  readonly extraImage?: string;
  readonly time: string;
  readonly viewed: boolean;
}

export const RizkyId = uuid();

export const defaultUsers: User[] = [
  {
    id: uuid(),
    name: "Mark Webber",
    avatar: AvatarMark,
    action: "reacted to your recent post",
    emphasis: "My first tournament today!",
    time: "1m ago",
    viewed: false,
  },
  {
    id: uuid(),
    name: "Angela Gray",
    avatar: AvatarAngela,
    action: "followed you",
    time: "5m ago",
    viewed: false,
  },
  {
    id: uuid(),
    name: "Jacob Thompson",
    avatar: AvatarJacob,
    action: "has joined your group",
    emphasis: "Chess Club",
    empashisColor: "text-blue-600",
    time: "1 day ago",
    viewed: false,
  },
  {
    id: RizkyId,
    name: "Rizky Hasanuddin",
    avatar: AvatarRizky,
    action: "sent you a private message",
    time: "5 days ago",
    viewed: true,
  },
  {
    id: uuid(),
    name: "Kimberly Smith",
    avatar: AvatarKimberly,
    action: "commented on your picture",
    extraImage: ExtraImage,
    time: "1 week ago",
    viewed: true,
  },
  {
    id: uuid(),
    name: "Nathan Peterson",
    avatar: AvatarNathan,
    action: "reacted to your recent post",
    emphasis: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    viewed: true,
  },
  {
    id: uuid(),
    name: "Anna Kim",
    avatar: AvatarAnna,
    action: "left the group",
    emphasis: "Chess Club",
    empashisColor: "text-blue-600",
    time: "2 weeks ago",
    viewed: true,
  }
];