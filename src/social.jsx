import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/nsengiyumva-christian-b9947a233/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/NSENGIYUMVA-Christian",
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: "https://twitter.com/NSENGIYUMVAChr9",
    icon: <FaTwitter />,
  },
];

// // wrap the social array with a parent div
// export default function SocialIcons() {
//   return (
//     <div>
//       {social.map((socialIc) => {
//         const { id, url, icon } = socialIc;
//         return (
//           <li key={id}>
//             <a href={url}>{icon}</a>
//           </li>
//         );
//       })}
//     </div>
//   );
// }
