function FindProxyForURL(url, host) {
  /* Normalize the URL for pattern matching */
  url = url.toLowerCase();
  host = host.toLowerCase();

  /* Don't proxy local domains */
  if (dnsDomainIs(host, ".lululemon.com") || host == "lululemon.com") {
    return "SOCKS5 127.0.0.1:8080";
  }

  return "DIRECT";
}
