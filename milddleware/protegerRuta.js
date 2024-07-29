import jwt from 'jsonwebtoken'
import { Usuario } from '../models/index.js'


const protegerRuta = async (req, res, next) => {

    const {_token } = req.cookies  //se recupera de cookie el token

    if(!_token) {
        return res.redirect('/auth/login') //en caso de que no exista se retorna al login
    }
    
    try {
        const decoded = jwt.verify(_token, process.env.JWT_SECRET) //se comprueba que sea el mismo token
        const usuario = await Usuario.scope('eliminarPassword').findByPk(decoded.id) //se toma de la BD.
        
       console.log(usuario)
       
       if(usuario){
        req.usuario = usuario
       }
       else{
        return res.redirect('/auth/login')
       }
        return next();

    } catch (error) {
        //si hay error, se manda para el login
        return res.clearCookie('_token').redirect('/auth/login') 
    }
     
}

export default protegerRuta;