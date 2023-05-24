
let users = [];

const createUser = (socketId, username) => {
    const user = {
        socketId, username,
    }
    users.push(user);
    return user;
}

const findUser = (socketId) => {
    return users.find((user) => user.socketId === socketId)
}

const deleteUser = (socketId) => {
    const filteredUsers = users.filter((user) => user.socketId !== socketId);
    users = filteredUsers;
    return filteredUsers;
}

module.exports = {createUser, findUser, deleteUser};