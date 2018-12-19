function Main() 
{
    // Start thinking about modularizing this script 

  
    function addDays(date, days) 
  {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
  }
  
  function removeDays(date, days) 
  {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
  }
  
  
/*  ---------------------------------------------------------------*/  
  
  
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheets()[0];
  var results = sheet.getRange('A1:F2').getValues();
  
  var startDateFromSheet = results[1][0];
  var days = results[1][2];
  var lastDayOfSprintPerSheet = results[1][4];
  
 // This works for one Sprint. Thinkg of a way to make this multiple sprints. 
  // add a way to to get user input
  //implement in slack. 

  //var now = new Date();
  //var standupStartDate = new Date('December 18, 2018 09:30:00 -0500');
  //var standupEndDate = new Date('December 18, 2018 09:45:00 -0500');
  var weekDays = [CalendarApp.Weekday.MONDAY,CalendarApp.Weekday.TUESDAY,CalendarApp.Weekday.WEDNESDAY,CalendarApp.Weekday.THURSDAY,CalendarApp.Weekday.FRIDAY];

  // Schedule Daily Stand up.
  var sprintStartDate = new Date(startDateFromSheet);
  //var anotherEnding = new Date(addDays(sprintStartDate,days));
  var sprintEndDate = new Date(lastDayOfSprintPerSheet);
  
  var standupStartDate = new Date(startDateFromSheet);  
  var standupEndDate = new Date(startDateFromSheet);
  
   standupStartDate.setHours(09,30,00); 
   standupEndDate.setHours(09,45,00);
  
  //var sprintPlanningStart = addDays(sprintStartDate,days+1);
  //var sprintPlanningEnds = addDays(sprintStartDate,days+1);
  
  var sprintPlanningStart = new Date(sprintEndDate);
  var sprintPlanningEnds =  new Date(sprintEndDate);
  
  //Schedule Standups.   //find a way to stop the stand ups from going for forever.
  var dailyStandUps = CalendarApp.getDefaultCalendar().createEventSeries("StandUp - Testing", standupStartDate, standupEndDate, 
                           CalendarApp.newRecurrence().addDailyRule().onlyOnWeekdays(weekDays));
  
  var sprintReviewWarmUp = addDays(sprintStartDate,days);  
  var sprintReviewWarmUpStart = addDays(sprintStartDate,days);
  var sprintReviewWarmUpEnding = addDays(sprintStartDate,days);
  
  var sprintReviewStart = addDays(sprintStartDate,days);
  var sprintReviewEnds = addDays(sprintStartDate,days);
  
  var sprintRetroStarts = addDays(sprintStartDate,days);
  var sprintRetroEnds = addDays(sprintStartDate,days);

  var sprintCelebrationStarts = addDays(sprintStartDate,days);
  var sprintCelebrationEnds = addDays(sprintStartDate,days);
  
  var internalWalkStart = addDays(sprintStartDate,days-1);
  var internalWalkEnd = addDays(sprintStartDate,days-1);
 
  internalWalkStart.setHours(12,00,00);
  internalWalkEnd.setHours(13,55,55);
 
  sprintReviewWarmUpStart.setHours(12,00,00);
  sprintReviewWarmUpEnding.setHours(13,55,55);
  
  sprintReviewStart.setHours(14,00,00);
  sprintReviewEnds.setHours(15,00,00);
  
  sprintRetroStarts.setHours(16,00,00);
  sprintRetroEnds.setHours(17,00,00);
  
  sprintCelebrationStarts.setHours(15,01,00);
  sprintCelebrationEnds.setHours(15,59,00);

  var internalWalkThru = CalendarApp.getDefaultCalendar().createEvent("Internal Walkthru - Testing", internalWalkStart, internalWalkEnd);
  var eventSRWarmup = CalendarApp.getDefaultCalendar().createEvent("Sprint Review Warmup - Testing", sprintReviewWarmUpStart, sprintReviewWarmUpEnding);
  var eventSReview = CalendarApp.getDefaultCalendar().createEvent("Sprint Review - Testing", sprintReviewStart, sprintReviewEnds);
  var eventRetro = CalendarApp.getDefaultCalendar().createEvent("Sprint Retro - Testing", sprintRetroStarts, sprintRetroEnds);
  var eventCelebration = CalendarApp.getDefaultCalendar().createEvent("Sprint Celbration - Testing", sprintCelebrationStarts, sprintCelebrationEnds);
  
  //Now we need to Sprint Plan - The day after Sprint Review.

  sprintPlanningStart.setHours(09,30,00);
  sprintPlanningEnds.setHours(11,30,00);
  
  var day = sprintPlanningStart.getDay();
  
  if(  day == 0 )
  {
    sprintPlanningStart = addDays(sprintPlanningStart,1)
    sprintPlanningEnds = addDays(sprintPlanningEnds,1)  
  }
  else if (day == 6)
  {
    sprintPlanningStart = addDays(sprintPlanningStart,2)
    sprintPlanningEnds = addDays(sprintPlanningEnds,2) 
  }
   
  var eventSprintPlanning = CalendarApp.getDefaultCalendar().createEvent("Sprint Planning - Testing", sprintPlanningStart, sprintPlanningEnds);
  
  
  // No stand ups on Sprint Planning and on Sprint review days. Add that logic 
  
  
 
}
