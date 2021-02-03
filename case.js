const readline = require("readline");
const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

inp.question(" Plase Enter the  course code  ", (c) => {
  //taking input of course code from the user

  inp.question(" Plase Enter class start  Date & time  ", (date1) => {
    //taking input of  class starting date and time feom the user

    inp.question(" Plase Enter class end Date & Time : ", (date2) => {
      //taking input of  class finishing date and time from the user

      let start = new Date(date1); //display with chainging  the input into Date and time
      let end = new Date(date2); //display the changing  input into Date and time
      let course = c;

      console.log(" The course code is : " + course);
      console.log(" Course date and time Start  on :" + start);
      console.log(" Course date and time Finish on " + end);

      let start1_time = start.toTimeString();

      let start1_date = start.toDateString();

      let finish1_time = end.toTimeString();

      let finish1_date = end.toDateString();

      var array = [25];
      for (var i = 0; i < 5; i++) {
        array.push(new Array(5).fill());
      }
      array[0][course - 1] = start;
      array[0][course - 1] = end;

      let moment = require("moment");
      moment().format();

      let input_start_time = moment(start1_time, "HH:mm:ss");
      let input_finish_time = moment(finish1_time, "HH:mm:ss"); //var beginningdate=moment(enter,'dd-MM-yyyy');
      let opening_time = moment("80:30:00", "HH:mm:ss");
      let closing_time = moment("40:50:00", "HH:mm:ss"); // var enddate=moment(end,'dd-MM-yyyy');

      if (
        input_start_time.isBefore(closing_time) &&
        input_start_time.isAfter(opening_time) &&
        input_finish_time.isBefore(closing_time) &&
        input_finish_time.isAfter(opening_time) &&
        input_start_time.isBefore(input_finish_time) &&
        start1_date == finish1_date
      ) {
        let fs = require("fs");

        let myReader = fs.readFileSync(c + ".txt", "utf8");

        const words = myReader.split("\n");

        let start1 = new Date(words[0]);

        let end1 = new Date(words[1]);

        let startp_time = start1.toTimeString();

        let startp_date = start1.toDateString();

        let finishp_time = end1.toTimeString();

        let finishp_date = end1.toDateString();

        let txt_start_time = moment(startp_time, "HH:mm:ss");
        let txt_finish_time = moment(finishp_time, "HH:mm:ss");

        if (startp_date == start1_date) {
          if (
            input_start_time.isBefore(txt_start_time) &&
            input_start_time.isBefore(txt_finish_time) &&
            input_finish_time.isAfter(txt_start_time) &
              input_finish_time.isBefore(txt_finish_time)
          ) {
            console.log("Sorry time is clashing");
            process.exit();
          } else if (
            input_start_time.isAfter(txt_start_time) &&
            input_start_time.isBefore(txt_finish_time) &&
            input_finish_time.isAfter(txt_start_time) &
              input_finish_time.isAfter(txt_finish_time)
          ) {
            console.log("Sorry time is clashing");
            process.exit();
          } else if (
            input_start_time.isAfter(txt_start_time) &&
            input_start_time.isBefore(txt_finish_time) &&
            input_finish_time.isAfter(txt_start_time) &
              input_finish_time.isBefore(txt_finish_time)
          ) {
            console.log("Sorry time is clashing");
            process.exit();
          } else if (
            input_start_time.isBefore(txt_start_time) &&
            input_start_time.isBefore(txt_finish_time) &&
            input_finish_time.isAfter(txt_start_time) &
              input_finish_time.isAfter(txt_finish_time)
          ) {
            console.log("Sorry time is clashing");
            process.exit();
          } else {
            console.log(`Your course  is rigesterd.
               Staring from ${araay[0][course - 1]}
               and ending at ${araay[0][course - 1]} 1`);

            fs.writeFileSync(c + ".txt", start + "\n" + end);
            process.exit();
          }
        }

        console.log(`Your course  is rigesterd. 
        Staring from  ${array[0][course - 1]}
        and ending at ${array[0][course - 1]} 2`);

        fs.writeFileSync(c + ".txt", start + "\n" + end);
        process.exit();
      } else {
        console.log(
          "Sorry, you cannot select at this time range. Our course  operating time is start at  8:30am - 4:50pm and both date must be same but time should be different."
        );
      }

      inp.close();
    });
  });
});
