/*
Given the following classes:

Class Band with the properties:
    name - string
    genres - Array
    members - Array

Create a class called "Member" with the properties:
    name - string
    instrument - string

Write the logic to add members to the Band class in the addMember function.
In this function, you should not allow more than one drummer to be added, meaning you need to ensure that only one member with the instrument "Drums" can be added.
*/

class Band {
  constructor({ name, genres = [] }) {
    this.name = name;
    this.genres = genres;
    this.members = [];
  }
  addMember(newMember) {
    if (
      newMember.instrument != "Drums" ||
      !this.members.some((member) => member.instrument === "Drums")
    ) {
      this.members.push(newMember);
    } else {
      console.log(`Sorry ${newMember.name}, there's a drummer already :(`);
    }
  }
}

class Member {
  constructor({ name, instrument }) {
    this.name = name;
    this.instrument = instrument;
  }
}

const band = new Band({
  name: "The Jacks",
  genres: ["rock", "pop", "post-punk"],
});

band.addMember(new Member({ name: "Erik", instrument: "Guitar" }));
band.addMember(new Member({ name: "Paul", instrument: "Drums" }));
band.addMember(new Member({ name: "Steve", instrument: "Drums" }));
band.addMember(new Member({ name: "Roger", instrument: "Guitar" }));
band.addMember(new Member({ name: "Pedro", instrument: "Drums" }));
band.addMember(new Member({ name: "Martha", instrument: "Bass" }));

console.log(band);
