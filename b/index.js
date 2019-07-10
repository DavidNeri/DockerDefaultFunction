module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var unity, ten, hundred, OT_Uit, u, t, h, OT_U;
    unity = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    ten = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    hundred = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    OT_Uit= ["", "M", "MM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM", "MMMMMMMM", "MMMMMMMMM"];
    u= req.query.number % 10;
    t = Math.floor(req.query.number / 10) % 10;
    h = Math.floor(req.query.number / 100) % 10;
    OT_U = Math.floor(req.query.number / 1000);
    
    if (req.query.number >= 1000){
        req.query.roman = OT_Uit[OT_U] + hundred[h] + ten[t] + unity[u]
    }else if (req.query.number >= 100){
        req.query.roman =  hundred[h] + ten[t] + unity[u]
    }else if (req.query.number >= 10){
        req.query.roman =  ten[t] + unity[u]
    }else if (req.query.number >= 1 ){
        req.query.roman = unity[req.query.roman]
    }  
   

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hi " + (req.query.name || req.body.name) + " You entered the number "+ req.query.number + 
            " And his roman correspondient  is "+ req.query.roman
        };
    }else {
        context.res = {
            status: 400,
            body: "Please pass your name and a number to convert  on the query string or in the request body"
        };
    }
};