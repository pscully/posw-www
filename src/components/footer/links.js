const FooterLinks = [
  { href: "/wordpress-services/support", label: "WP CARE" },
  { href: "/wordpress-services/task", label: "WP TASK" },
  { href: "/wordpress-services/increase-speed", label: "WP FAST" },
  { href: "/wordpress/seo", label: "WP DRED" },
  { href: "/wordpress/development", label: "WP WORK" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default FooterLinks;
