class Certificafion {
  constructor({ name, url }) {
    //_ notation for private field
    (this._name = name), (this._url = url);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const cloudPractitioner = new Certificafion({
  name: "AWS Cloud Practitioner",
  url: "www.cloudpractitioner.com",
});

console.log(cloudPractitioner.name); //undefined if there's no getter
cloudPractitioner.name = "A new certification"; //won't update if there's no setter
console.log(cloudPractitioner.name);
