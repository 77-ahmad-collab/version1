import React, { useState, useContext } from "react";
import styles from "../checkout.module.css";
import * as Rs from "react-bootstrap";
// import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import DateTimePicker from "react-datetime-picker";
import { FoodDataContext } from "../../../../components/FoodData";
// const deliveryTime = [
//   {
//     id: 1,
//     time: "Express-Delivery",
//     time2: "90 min express delivery",
//   },
//   {
//     id: 2,
//     time: "8am-11am",
//     time2: "8.00 AM - 11.00 AM",
//   },
//   {
//     id: 3,
//     time: "11am-2pm",
//     time2: " 11.00 AM - 2.00 PM",
//   },
//   {
//     id: 4,
//     time: "2pm-5pm",
//     time2: "2.00 PM - 5.00 PM",
//   },
//   {
//     id: 5,
//     time: "5pm-8pm",
//     time2: " 5.00 PM - 8.00 PM",
//   },
//   {
//     id: 6,
//     time: "Next Day",
//     time2: "Next Day",
//   },
// ];

function DeliverySchedule(props) {
  const value = useContext(FoodDataContext);
  // const [hour12, sethour12] = useState(39600000);

  // const [t, sett] = useState(0);
  // const value = useContext(FoodDataContext);
  // const [date, setdate] = useState(0);
  // const [month, setmonth] = useState(0);
  // const [year, setyear] = useState(0);
  // const [myhourss, setmyhourss] = useState(0);
  // const [min, setmin] = useState(0);
  // const [fdate, setfdate] = useState(0);
  // const [pdate, setpdate] = useState(0);

  // date: "12",
  // month: "23",
  // year: "2020",
  // myhour: 0,
  // myminutes: 0,

  // const handledate = (e) => {
  //   console.log(t, "o am t");
  //   setyear(parseInt(e.target.value.slice(0, 4)));
  //   setmonth(parseInt(e.target.value.slice(5, 7)));
  //   setdate(parseInt(e.target.value.slice(8, 10)));
  //   // setdate({
  //   //   date: date,
  //   //   month: month,
  //   //   year: year,
  //   // });
  //   setfdate(new Date(year, month, date, myhourss, min, 0).getTime());
  //   settimezone();
  // };
  // const settimezone = () => {
  //   setpdate(new Date().getTime());
  //   sett(fdate - pdate);
  //   console.log(pdate, fdate, "fafsjdvh");
  //   console.log(t, "this is the differnce");
  //   if (t > hour12) {
  //     console.log("time difference is more than 12 hours");
  //     close();
  //   } else {
  //     console.log("time difference is less than 12 hour");
  //     open();
  //   }
  // };
  const { open, close, banner, time, gettime, deldate, getdeltime } = value;
  // console.log(date, year, month, myhourss, min, "the date object");
  // const handletime = (e) => {
  //   // console.log(e.target.value);
  //   setmyhourss(parseInt(e.target.value.slice(3, 5)));
  //   // console.log(date, "i am date");
  //   // setdate({ myhour: e.target.value.slice(0, 2) });
  //   // console.log(date, "i am date");
  //   setmin(parseInt(e.target.value.slice(3, 5)));

  //   setfdate(new Date(year, month, date, myhourss, min, 0).getTime());
  //   // console.log(typeof date);
  //   // console.log(futureDate);
  //   // const year = futureDate.getFullYear();

  //   // let month = futureDate.getMonth();
  //   // const futureTime = futureDate.getTime();
  //   setpdate(new Date().getTime());

  //   sett(fdate - pdate);
  //   // console.log(today, "today time");
  //   // console.log(futureTime, "future");
  //   // console.log(year, hours, minutes);
  //   console.log(fdate, pdate, "hoomeopathic");
  //   console.log(t, "this is the differnce");
  //   // hour12 = 43200000;
  //   if (t > hour12) {
  //     console.log("time difference is more than 12 hours");

  //     close();
  //   } else {
  //     console.log("time difference is less than 12 hour");
  //     open();
  //   }
  //   gettime(t);
  //   // const oneDay = 24 * 60 * 60 * 1000;
  //   // const oneHour = 60 * 60 * 1000;
  //   // const oneMinute = 60 * 1000;
  //   // let days = t / oneDay;
  //   // days = Math.floor(days);
  //   // let dhours = Math.floor((t % oneDay) / oneHour);
  //   // let dminutes = Math.floor((t % oneHour) / oneMinute);
  //   // let dseconds = Math.floor((t % oneMinute) / 1000);
  //   // if (dhours <= 12) {
  //   //   open();
  //   // } else {
  //   //   close();
  //   // }
  //   // gettime(dhours);
  //   // console.log("remaing houer", dhours);
  //   // console.log("remaing days", days);
  //   // console.log("remaing minutes", dminutes);
  //   // console.log("remaing dseconds", dseconds);
  // };
  // const [banner, setbannner] = useState(false);
  // useEffect(
  //   (val) => {
  //     const tt = setTimeout(() => {
  //       // close();
  //       return () => clearTimeout(tt);
  //     }, 3000);
  //   },
  //   [banner]
  // );
  const handletime = (e) => {
    console.log(e.target.value);
    const year = parseInt(e.target.value.slice(0, 4));
    const month = parseInt(e.target.value.slice(5, 7));
    const date = parseInt(e.target.value.slice(8, 10));
    const hour = parseInt(e.target.value.slice(11, 13));
    const min = parseInt(e.target.value.slice(14, 16));
    console.log(year, month, date, hour, min);
    const myyfutureDate = new Date(year, month - 1, date, hour, min, 0);
    const tempdate = `${year}-${month}-${date}`;
    const ftime = myyfutureDate.getTime();
    const s_hours = myyfutureDate.getHours();
    const s_min = myyfutureDate.getMinutes();
    const s_sec = myyfutureDate.getSeconds();
    console.log(s_hours, s_min, s_sec, "s_date");
    const temptime = `${s_hours}:${s_min}:${s_sec}`;
    getdeltime(temptime);
    deldate(tempdate);
    console.log(tempdate, "----------------");
    const ptime = new Date().getTime();
    const t = ftime - ptime;
    console.log(ftime, "ftime");
    console.log(ptime, "ptime");
    const hour12 = 43200000;
    console.log(t);
    if (t >= hour12) {
      console.log("time difference is more than 12 hours");

      close();
    } else {
      console.log("time difference is less than 12 hour");
      open();
    }
    gettime(t);
  };
  const myyfutureDate = new Date(2021, 2, 23, 10, 30, 0);

  console.log("myfuturedate", myyfutureDate.getTime());
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
    textField: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(1),
      width: "20%",
    },
  }));
  const classes = useStyles();
  return (
    <Rs.Card className={`${styles.checkoutcard} shadow p-4 bg-white rounded`}>
      <div>
        <h5 className={styles.cardtitle}>
          <Rs.Badge bsPrefix className={styles.numBadge}>
            3
          </Rs.Badge>
          Delivery Schedule
        </h5>
        {/* {banner && ( */}
        {banner ? (
          <p className="text-danger text-center mr-5">
            *Delivery time must be after 12 hours
          </p>
        ) : (
          ""
        )}
        {/* )} */}

        <div className={styles.containerdeck}>
          <div className={styles.row}>
            <div className={styles.radioGroup}>
              <form className={classes.container} noValidate>
                <TextField
                  id="datetime-local"
                  label="Date and time"
                  type="datetime-local"
                  onChange={handletime}
                  defaultValue="2020-01-24T10:30"
                  className={`w-100 mr-5 ${classes.textField}`}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
              {/* {deliveryTime.map((delivery) => {
                return (
                  <label
                    key={delivery.id}
                    className={`${styles.column} ${styles.cardinput}`}
                  >
                    <input
                      type="radio"
                      name="product"
                      className={styles.cardinputelement}
                    />

                    <div className={styles.contentcardheader}>
                      {delivery.time}
                    </div>
                    <div className={styles.contentcard}>{delivery.time2}</div>
                  </label>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </Rs.Card>
  );
}
export default DeliverySchedule;
