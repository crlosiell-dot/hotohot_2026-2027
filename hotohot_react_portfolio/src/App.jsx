import {browserRouter, Routes,Route,link,useParams} from "react-router-dom";
import "./App.css";

const hobbies=[
{
 id: 1,
 name: "Reading Wattpad",
 picture: "/https://www.google.com/imgres?q=wattpad&imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2FejtlihLBbyNv1OAJVEM7A72N3j1FpvJalFGZh_6Claw0MVFIjzLf_OARqv42QtfmuQ&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdev%3Fid%3D5726714232238156247&docid=gaabMQybC9kc1M&tbnid=Cytk2g3wXi89LM&vet=12ahUKEwjN4fjK_KuXAxXEyzgGHZkXCRQQnPAOegQIQxAA..i&w=512&h=512&hcb=2&ved=2ahUKEwjN4fjK_KuXAxXEyzgGHZkXCRQQnPAOegQIQxAA",
 description: "I enjoy reading stories on wattpad specially romance and inspring stories.",
 reason: " I like reading wattpad because it helps me relax and imagine different stories."
},

{
  id: 2,
  name: " Playing Online Games",
  picture: "/https://www.google.com/imgres?q=online%20games%20ml%5C&imgurl=http%3A%2F%2Fimages.summitmedia-digital.com%2Fspotph%2Fimages%2F2021%2F04%2F29%2F10-games-to-download-640-1619669795.jpg&imgrefurl=https%3A%2F%2Fwww.spot.ph%2Fnewsfeatures%2Ftrending%2F85996%2Fgames-like-mobile-legends-a4487-20210502-lfrm&docid=Hmu8zjTdlxYAbM&tbnid=9fN20zWByZh-OM&vet=12ahUKEwjigcb5_KuXAxXb2TgGHc0vFqoQnPAOegQIOhAA..i&w=640&h=360&hcb=2&ved=2ahUKEwjigcb5_KuXAxXb2TgGHc0vFqoQnPAOegQIOhAA",
  description: "I enjoy playing online games during my free time.",
  reason: " I like online games because i can play with my friends online."
},

{
  id: 3,
  name: "Baking",
  picture: "/https://www.google.com/imgres?q=baking&imgurl=https%3A%2F%2Fculinaryclassroom.com%2Fwp-content%2Fuploads%2F2024%2F04%2FHow-to-Start-Baking--1024x585-1024x585.webp&imgrefurl=https%3A%2F%2Fculinaryclassroom.com%2Fhow-to-start-baking%2F&docid=jgC2iApjKyEYyM&tbnid=u0z_mICH_ko7GM&vet=12ahUKEwidrIOV_auXAxVF2DgGHQQGIPcQnPAOegQIMxAA..i&w=1024&h=585&hcb=2&ved=2ahUKEwidrIOV_auXAxVF2DgGHQQGIPcQnPAOegQIMxAA",
  description: " I enjoy making delicious pastries and trying new different recipes.",
  reason: " I like because it helps me to be creative about anything also to food i bake."

},

];