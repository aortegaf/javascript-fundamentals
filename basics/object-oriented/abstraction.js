class Certificafion {
  constructor({ name, url }) {
    (this.name = name), (this.url = url);
  }
}

class Student {
  constructor({ name, age, email, twitter, instagram, certifications = [] }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.socials = {
      twitter,
      instagram,
    };
    this.certifications = certifications;
  }
}

const awsCloudPractitioner = new Certificafion({
  name: "AWS Cloud Practitioner",
  url: "www.cloudpractitioner.com",
});

const juan = new Student({
  name: "Juan",
  age: 25,
  email: "juanito@gmail.com",
  twitter: "juantweet",
  instagram: "juaninsta",
  certifications: [awsCloudPractitioner],
});

console.log(juan);
