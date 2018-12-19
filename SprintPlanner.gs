function Main() 
{
  
  // Start thinking about modularizing this script 
  
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheets()[0];
  var results = sheet.getRange('A1:B2').getValues();
  
 // This works for one Sprint. Thinkg of a way to make this multiple sprints. 
  // add a way to to get user input
  //implement in slack. 
  
  
  // User input should be 
  // Type of Sprint (Scrum for MVP)
  // Start and end date of Sprint ( In format : ('December 18, 2018 09:30:00 -0500');) 
  
  
  function addDays(date, days) 
  {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
  }

  //var now = new Date();
  var weekDays = [CalendarApp.Weekday.MONDAY,CalendarApp.Weekday.TUESDAY,CalendarApp.Weekday.WEDNESDAY,CalendarApp.Weekday.THURSDAY,CalendarApp.Weekday.FRIDAY];

  // Schedule Daily Stand up. 
  var standupStarts = new Date('December 18, 2018 09:30:00 -0500');
  var standupEnds = new Date('December 18, 2018 09:45:00 -0500');
    
  //this is good to go for standups
  var dailyStandUps = CalendarApp.getDefaultCalendar().createEventSeries("StandUp - Testing", standupStarts, standupEnds, 
                           CalendarApp.newRecurrence().addDailyRule().onlyOnWeekdays(weekDays));
  
  //find a way to stop the stand ups from going for forever.
  
  //How do I allow guest to modify? 
  var sprintReviewWarmUp = addDays(sprintStart,14);  
  var sprintReviewWarmUpStart = addDays(sprintStart,14);
  var sprintReviewWarmUpEnding = addDays(sprintStart,14);
  
  var sprintReviewStart = addDays(sprintStart,14);
  var sprintReviewEnds = addDays(sprintStart,14);
  
  var sprintRetroStarts = addDays(sprintStart,14);
  var sprintRetroEnds = addDays(sprintStart,14);

  var sprintCelebrationStarts = addDays(sprintStart,14);
  var sprintCelebrationEnds = addDays(sprintStart,14);
  
  var internalWalkStart = addDays(sprintStart,13);
  var internalWalkEnd = addDays(sprintStart,13);
 
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
  var sprintPlanningStart = addDays(sprintStart,15);
  var sprintPlanningEnds = addDays(sprintStart,15);
  
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
