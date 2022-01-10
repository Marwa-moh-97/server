import { Router } from "express";
import pc from "@prisma/client";

const royter =Router();

const prisma =new pc.PrismaClient();

//read
router.get('/',async(req, res) => {
    try {
        const products = await prisma.product.findMany()
        return res.status(200).json(products);
    }catch (error){
        return res.json({message:"sorry the "})
    }
})
// create
router.post('/',async(req, res) => {
    try {
        const products = await prisma.product.cr()
        return res.status(201).json(product);
    }catch (error){
        console.log(req.body);
    }
})

// 
