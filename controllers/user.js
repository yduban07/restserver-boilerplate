import {response, request} from 'express';


const usersGet = (req = request, res = response) => {
    
    const {a:angel} =  req.query;

    res.json({
        msg: 'get API - controlador',
        angel
    });
}

const usersPost = (req, res) => {

    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API',
        nombre
    });
}

const usersPut =  (req = request, res) => {

    const id = +req.params.id;

    res.status(201).json({
        msg: 'put API',
        id
    });

}

const usersDelete = (req, res) => {
    res.json({
        msg: 'delete API'
    });
}

export {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,

}