import bcrypt from 'bcrypt';

const usuarios = [
	{
		name: "Sebastian",
        lastname:"Fernandez",
		email: "sebasminion@gmail.com",
		confirm: 1,
		password: bcrypt.hashSync("contrasena", 10),
	},
	// Add other users if needed
];

export default usuarios;