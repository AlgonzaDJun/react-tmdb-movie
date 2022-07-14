const encodedParams = new URLSearchParams();
  encodedParams.append("q", "Hello, world!");
  encodedParams.append("target", "id");
  encodedParams.append("source", "en");

console.log(encodedParams);