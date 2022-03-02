class UserController {
  constructor() {}

  getUserDetails(req, res) {
    console.log("Request", req.body);
    let arr = req.body.data;
    let alphabets = [];
    let numbers = [];

    for (var i = 0; i < arr.length; i++) {
      if (Number(arr[i])) {
        numbers.push(arr[i]);
      } else {
        alphabets.push(arr[i]);
      }
    }

    const data = {
      is_success: true,
      user_id: "prince_goyal_14052000",
      email: "prince0792.cse19@chitkara.edu.in",
      roll_number: "1910990792",
      numbers: numbers,
      alphabets: alphabets,
    };
    return res.send(data);
  }
}

module.exports = new UserController();
