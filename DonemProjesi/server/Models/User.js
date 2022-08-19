import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    sifre:{
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
    },
    surname: {
        type: String,
    }
}, {
    timestamps: true // Her yeni veri oluştuğunda veya bir satır güncellendiğinde işlem tarihini tutar
})

export default mongoose.model('User',UserSchema);