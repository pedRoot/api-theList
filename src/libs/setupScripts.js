import Role from '../models/Role'
import User from '../models/User'
import Meeting from '../models/Meeting'
import Draw from "../models/Draw";
import argon2 from "argon2";

export const createRole = async () => {

  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new Role({ name: 'user' }).save(),
      new Role({ name: 'admin' }).save(),
    ]);

  } catch (error) {
    console.log(error);
  }
}

export const createMeeting = async () => {

  try {
    const count = await Meeting.estimatedDocumentCount();

    if (count > 0) return;
    const role = await Role.findOne({ name: 'user' });

    await Promise.all([
      new Meeting({ idMeeting: 1, name: 'martes' }).save(),
      new Meeting({ idMeeting: 2, name: 'viernes' }).save()
    ]);

  } catch (error) {
    console.log(error);
  }
}

export const createDraw = async () => {
  try {

    const count = await Draw.estimatedDocumentCount();

    if (count > 0) return;

    let meeting = await Meeting.findOne({ idMeeting: 1 });
    await Draw.create({
      name: "moderator",
      meeting: meeting._id,
      countAsSelected: true
    });

    meeting = await Meeting.findOne({ idMeeting: 2 });
    Promise.all([
      new Draw({ name: "moderator", meeting: meeting._id, countAsSelected: true }).save(),
      new Draw({ name: "main presenter", meeting: meeting._id, countAsSelected: true }).save(),
      new Draw({ name: "assistant presenter", meeting: meeting._id, countAsSelected: false }).save()
    ]);

  } catch (error) {
    console.log(error);
  }
}

export const createUser = async () => {

  try {

    const count = await User.estimatedDocumentCount();

    if (count > 0) return;

    let role = await Role.findOne({ name: "admin" }, '_id');

    await User.create({
      email: "admin@localhost",
      password: await argon2.hash("enter"),
      role: [role._id]
    })

    role = await Role.findOne({ name: "user" }, '_id');

    await Promise.all([
      new User({ email: 'ptorres@novopayment.com', password: await argon2.hash('enter'), role: [role._id] }).save(),
      new User({ email: 'jllerena@novopayment.com', password: await argon2.hash('enter'), role: [role._id] }).save(),
      new User({ email: 'jvega@novopayment.com', password: await argon2.hash('enter'), role: [role._id] }).save(),
      new User({ email: 'epenaloza@novopayment.com', password: await argon2.hash('enter'), role: [role._id] }).save(),
      new User({ email: 'ecabello@novopayment.com', password: await argon2.hash('enter'), role: [role._id] }).save(),
      new User({ email: 'emarmole@novopayment.com', password: await argon2.hash('enter'), role: [role._id] }).save(),
      new User({ email: 'gerodriguez@novopayment.com', password: await argon2.hash('enter'), role: [role._id] }).save(),
      new User({ email: 'hcorredor@novopayment.com', password: await argon2.hash('enter'), role: [role._id] }).save(),
      new User({ email: 'lhernandez@novopayment.com', password: await argon2.hash('enter'), role: [role._id] }).save(),
      new User({ email: 'jcadiz@novopayment.com', password: await argon2.hash('enter'), role: [role._id] }).save(),
      new User({ email: 'dacosta@novopayment.com', password: await argon2.hash('enter'), role: [role._id] }).save(),
      new User({ email: 'ylopez@novopayment.com', password: await argon2.hash('enter'), role: [role._id] }).save(),
      new User({ email: 'lmolina@novopayment.com', password: await argon2.hash('enter'), role: [role._id] }).save()
    ]);

  } catch (error) {
    console.log(error);
  }
}