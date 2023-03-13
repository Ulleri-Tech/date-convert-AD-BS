import {
  numberOfDaysEachYearBS,
  numberOfDaysEachMonthBS,
  MAX_DAY_DIFF,
  MIN_AD_YEAR,
  MIN_AD_MONTH,
  MIN_AD_DAY,
  MILLS_IN_DAY,
  MIN_BS_YEAR,
  weekDayBS,
  MONTH_NAME_BS,
} from "./constant";
import { convertToNepali } from "./utils";

export function ADTOBS(year: number, month: number, day: number): string {
  const START_DATE = new Date(MIN_AD_YEAR, MIN_AD_MONTH, MIN_AD_DAY);

  if (!year) year = new Date().getUTCFullYear();
  if (!month) month = new Date().getUTCMonth();
  if (!day) day = new Date().getUTCDate();

  const dayDiff = Math.ceil(
    (new Date(year, month, day).getTime() - START_DATE.getTime()) / MILLS_IN_DAY
  );

  if (dayDiff < 0 || dayDiff > MAX_DAY_DIFF) {
    return "Invalid Date out of range";
  }
  if (month < 0 || month > 11 || day < 0 || day > 32) {
    return "Invalid Date";
  }
  let year_bs = String(MIN_BS_YEAR);
  let totalCount = 0;
  let countUptoPreviousYear = 0;

  // find Year only first
  for (const [key, value] of Object.entries(numberOfDaysEachYearBS)) {
    countUptoPreviousYear = totalCount;
    totalCount += value;
    if (totalCount > dayDiff) {
      year_bs = key;
      break;
    }
  }
  let nthDayofYear = dayDiff - countUptoPreviousYear + 1;
  //find month
  let total_count_month_wise = 0;
  let countUptoPreviousMonth = 0;
  let month_bs = 0;

  for (
    let i = 0;
    i < numberOfDaysEachMonthBS[year_bs].length &&
    nthDayofYear > total_count_month_wise;
    i++
  ) {
    countUptoPreviousMonth = total_count_month_wise;
    total_count_month_wise += numberOfDaysEachMonthBS[year_bs][i];
    if (countUptoPreviousMonth > 0) {
      month_bs++;
    }
  }

  let day_bs = nthDayofYear - countUptoPreviousMonth;
  return formatBSDate(+year_bs, month_bs + 1, day_bs);
}

export function BSTOAD(year: number, month: number, day: number): string {
  let year_num = +year;
  let day_num = +day;

  if (year_num < 2000 || year_num > 2100) {
    return "Invalid Date out of range";
  }

  let dayCount = 0;

  for (const [key, value] of Object.entries(numberOfDaysEachYearBS)) {
    if (year_num == 2000) {
      break;
    }
    dayCount += value;
    if (+key == year_num - 1) {
      break;
    }
  }
  for (let i = 0; i < month; i++) {
    dayCount += numberOfDaysEachMonthBS[year][i];
  }
  dayCount += day_num - 1;
  const final_time =
    Math.ceil(new Date(MIN_AD_YEAR, MIN_AD_MONTH, MIN_AD_DAY).getTime()) +
    dayCount * MILLS_IN_DAY;
  console.log(new Date(MIN_AD_YEAR, MIN_AD_MONTH, MIN_AD_DAY));
  return new Date(final_time).toLocaleDateString("en-ca");
}

export function dateTodayBS(): string {
  const weekday_BS = weekDayBS[new Date().getDay()];
  const [year_AD, month_AD, day_AD] = new Date()
    .toLocaleDateString("en-ca")
    .split("-");
  const date_BS = ADTOBS(+year_AD, +month_AD - 1, +day_AD);

  const year_bs = convertToNepali(date_BS.split("-")[0]);
  const month_bs = date_BS.split("-")[1];
  const day_bs = convertToNepali(date_BS.split("-")[2]);
  return `${weekday_BS}, ${
    MONTH_NAME_BS[+month_bs - 1]
  } ${day_bs}, ${year_bs} बि.सं`;
}

export function dateTodayAD(): string {
  return (
    new Date().toLocaleString("en-ca", {
      month: "long",
      day: "numeric",
      year: "numeric",
      weekday: "long",
    }) + " AD"
  );
}

function formatBSDate(year: number, month: number, day: number) {
  let monthStr: string;
  let dayStr: string;
  if (month < 10) monthStr = "0" + month;
  else monthStr = month + "";

  if (day < 10) dayStr = "0" + day;
  else dayStr = day + "";
  return `${year}-${monthStr}-${dayStr}`;
}
