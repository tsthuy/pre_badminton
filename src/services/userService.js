import db from "../../models";
import bcrypt, { hash } from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExist = await checkUserEmail(email);
            if (isExist) {
                // user already exist
                //compare

                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password', 'firstName', 'lastName'],
                    where: {
                        email: email,

                    },
                    raw: true
                })
                if (user) {
                    //compare
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'check pass done';
                        console.log(user)
                        delete user.password;
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong pass';
                    }
                }
                else {
                    userData.errCode = 2;
                    userData.errMessage = `User's is not found`
                }
            }
            else {
                userData.errCode = 1;
                userData.errMessage = `Yours email isn't exist in mt system. Phy try other email!`
            }
            resolve(userData)
        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (UserEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    email: UserEmail,
                }
            })
            if (user) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (userId === 'All') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            if (userId && userId !== 'All') {
                users = await db.User.findOne({
                    attributes: {
                        exclude: ['password']
                    },
                    where: {
                        id: userId
                    }
                })
            }
            resolve(users)
        } catch (e) {
            reject(e);
        }
    })
}

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        let check = await checkUserEmail(data.email);
        if (check === true) {
            resolve({
                errCode: 1,
                errMessage: 'Your email is already in used, Plz try another email'
            })
        }
        else {
            try {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                await db.User.create({
                    email: data.email,
                    password: hashPasswordFromBcrypt,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    gender: data.gender === '1' ? true : false,
                    roleId: data.roleId,
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Created new user'

                });
            } catch (e) {
                reject(e)
            }
        }
    })
}

let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: userId
                }
            })
            if (!user) {
                resolve({
                    errCode: 1,
                    errMessage: 'The User is not exist!'
                })
            }
            await db.User.destroy({
                where: {
                    id: userId
                }
            })
            resolve({
                errCode: 0,
                errMessage: 'the user is deleted'
            })
        } catch (e) {
            reject(e)
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: ('Missing required parameter!')
                })
            }
            let user = await db.User.findOne({
                where: {
                    id: data.id,
                },
                raw: false
            })
            if (user) {
                user.firstName = data.firstName
                user.lastName = data.lastName
                user.address = data.address
                await user.save()
                // await db.User.save({
                //     firstName: data.firstName,
                //     lastName: data.lastName,
                //     address: data.address,
                // })
                resolve({
                    errCode: 0,
                    errMessage: 'Edited completely'
                });
            }
            else {
                resolve({
                    errCode: 1,
                    errMessage: ('User not found! ')
                });
            }
        } catch (e) {
            reject(e)
        }
    })
}
let getAllCodeService = (typeInput) => {
    return new Promise(async (resolve, reject) => {

        try {
            if (!typeInput) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter!"
                })
            }
            else {
                let res = {}
                let allcode = await db.Allcode.findAll({
                    where: {
                        type: typeInput
                    }
                });
                res.errCode = 0
                res.data = allcode
                resolve(res)
            }


        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUserData: updateUserData,
    getAllCodeService: getAllCodeService
}