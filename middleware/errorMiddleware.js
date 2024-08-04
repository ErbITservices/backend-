class ErrorHandler extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export  const errorMiddleware =(err,req,res,next)=>{
    err.message=err.message || "internal error";    
    err.statusCode=err.statusCode || 500;    

    if(err.code ===1100){
        const message = `duplicate${Object.keys(err.keyValue)}entered`;
        err=new ErrorHandler
    }
}