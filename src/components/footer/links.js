const FooterLinks = [
  { href: "/wordpress-services/managed-hosting", label: "WP CARE" },
  { href: "/wordpress-services/task", label: "WP TASK" },
  { href: "/wordpress-services/increase-speed", label: "WP FAST" },
  { href: "/wordpress-services/seo", label: "WP DRED" },
  { href: "/wordpress-services/development", label: "WP WORK" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default FooterLinks;
