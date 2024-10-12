const express = require("express");
const cors = require("cors");
const { envVariables } = require("./envVariables");
const { serivice } = require("./service");

const { port } = envVariables;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", async (req, res, next) => {
	try {
		const data = serivice.findAll();
		res.json(await data);
	} catch (error) {
        next({isError:true, error});
    }
});

app.post("/api", async (req, res, next) => {
	try {
		const data = serivice.save(req.body);
		res.status(201).json(await data);
	} catch (error) {
        next({isError:true, error});
    }
});

app.delete("/api/:id", async (req, res, next) => {
	try {
		await serivice.deleteById(req.params.id);
		res.sendStatus(204);
	} catch (error) {
        next({isError:true, error});
    }
});

app.use((err, req, res, next)=>{
    if(err.isError){
        res.status(400).json({
            message:err.error.message,
            statusCode:400,
            timestamp:new Date()
        });
    }else{
        res.status(500).json({
            message:err.message,
            statusCode:500,
            timestamp:new Date()
        })
    }
});

app.listen(port, () => {
	console.log(`Port: ${port}, Node version: ${process.versions.node}`);
});
