export default function normalizeSocialMedias(socialMedia = null) {
  const santiziedSocialMedia = {
    id: socialMedia ? Number(socialMedia).id : 0,
    name: socialMedia ? String(socialMedia.name).trim().toLowerCase() : "",
    link: socialMedia ? String(socialMedia.link).trim().toLowerCase() : "",
  };
  return santiziedSocialMedia;
}
