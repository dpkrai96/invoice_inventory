import express from 'express'
import mongoose from 'mongoose'

import ClientModel from '../models/ClientModel.js'



export const createUser= async (req, res) => {

    // const client = req.body

    // const newClient = new ClientModel({...client, createdAt: new Date().toISOString() })

    try {
        // await newClient.save()
        res.status(200).json({user:"deepak",email:"email"});
    } catch (error) {
        res.status(409).json(error.message)
    }
}