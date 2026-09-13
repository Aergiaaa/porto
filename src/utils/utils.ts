export const GITHUB_LINK = "https://www.github.com/aergiaaa";
export const EMAIL_LINK = "mailto:mzalzala45@gmail.com";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/mzalzala";

export default function openLink(link: string) {
  if (link.startsWith("mailto:")) {
    window.location.href = link;
  } else {
    window.open(link, "_blank", "noopener,noreferrer");
  }
}
