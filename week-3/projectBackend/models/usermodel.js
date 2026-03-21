import { Schema, model } from 'mongoose';



// create cart schema{product, count}
const cartSchema=new Schema({
    product:{
        type: Schema.Types.ObjectId,
        ref:"product"//name of the product model
    },
    count:{
        type:Number,
        default:1
    }
})



const userSchema = new Schema({
    username: {
        type: String, // String-->mongoose schema type
        required: [true, 'username is required'], // true-->validation is required, if validation fails then error message will be "username is required"
        minLength: [4, 'username length should be greater than 4'], // 4-->minimum length of username should be 4, if validation fails then error message will be "username length should be greater than 4"
        maxLength: [20, 'username length should not exceed 20'], // 20-->maximum length of username should be 20, if validation fails then error message will be "username length should not exceed 20"
        unique: [true, 'username already exists'] // true-->username should be unique, if validation fails then error message will be "username already exists"
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        
    },
    email: {
        type: String,
        required: [true, 'email is mandatory'],
        unique: [true, 'email already exists']
    },
    age: {
        type: Number // Number-->mongoose schema type
    },
    cart:[cartSchema] // embedded document-->it will create a subdocument for cart in the user document, it will also create a separate collection for cart in the database and it will store the reference of the cart in the user document}]
},{
    versionKey: false, // to remove __v field from the document
    timestamps: true // to add createdAt and updatedAt fields to the document

});

// model-->it is a class which is used to create and read documents from the database, it takes two arguments first is the name of the collection and second is the schema for the collection
// export const userModel=model("user",userSchema)-->it will create a collection named "users" in the database and the schema for the collection will be userSchema, it will also create a class named userModel which can be used to create and read documents from the database
export const userModel = model('user', userSchema); // "user"-->collection name in the database, userSchema-->schema for the collection

export const cartModel=model("cart",cartSchema)


