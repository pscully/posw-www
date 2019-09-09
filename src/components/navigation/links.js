const Links = [
  { href: "/", label: "HOME"},
  { href: "/agency", label: "ABOUT US" },
  { href: "/wordpress-services", label: "SERVICES" },
  { href: "/share", label: "LEARN" },
  { href: "/contact", label: "CONTACT" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default Links;
