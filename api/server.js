
import { MONGO_CONECTION_URI, MONGO_DB_NAME, MONGO_PORT, API_PORT} from './config';
// const express = require('express');
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import productsRouter from './routes/productsRouter';
import multer from 'multer';



mongoose.connect(`${MONGO_CONECTION_URI}:${MONGO_PORT}/${MONGO_DB_NAME}`).then(() => {
        console.log(`connected to mongodb on port ${MONGO_PORT}`);
    

        const app = express();
        
        app.use(bodyParser.json());

        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
              cb(null, 'uploads/');
            },
            filename: function (req, file, cb) {
                const ext = file.mimetype.split('/')[1];
                cb(null, file.fieldname + '-' + Date.now() + '.' + ext);
            },
        });

        const upload = multer({ storage });

        app.use(cors({
            origin: '*'
        }))

        app.get('/upload', (req, res) => {
            res.json({succes : true})
        });
        
        app.post('/upload', upload.single('image'), async (req, res) => {
            try {
                console.log(req.file);
                res.status(200).json({ message: 'Image uploaded successfully' });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Server error' });
            }
        });

        app.use('/products', productsRouter);

        app.get('/api', (req, res) => {
            res.json({succes : true})
        });


        app.get('*', (req, res) => {
            res.json({msg: "Not Found"});
        });

        app.listen(API_PORT, () => {
            console.log(`Server is listening to port ${API_PORT} ....`)
        })

    }
);