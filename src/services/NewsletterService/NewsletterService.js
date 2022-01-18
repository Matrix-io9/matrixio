import { supabase } from './supabaseClient'

async function checkUserExists(email) {
    const { data, error } = await supabase
        .from('newsletter_members')
        .select('email')
        .eq('email', email)
    if (error) {
        console.log("Error: ", error);
    }
    else {
        try {
            if (data.length ? (data[0].email === email) : false) {
                return false
            }
            return true
        }
        catch (err) {
            console.log(err)
        }
    }
}

async function InsertUser(username, email) {
    const { error } = await supabase
        .from('newsletter_members')
        .insert([
            {
                name: username, email: email
            }
        ])
    if (error) {
        console.log(error)
    }

    alert("Subscribed successfully")
}

async function SubscribeUser(username, email) {
    await checkUserExists(email) ? InsertUser(username, email) : alert("Email already subscribed")
}

export default SubscribeUser;