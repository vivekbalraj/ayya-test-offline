#= require active_admin/base
//= require pickadate/picker
//= require pickadate/picker.date
//= require pickadate/picker.time

$(document).ready ->
  $('#event_start_date').pickadate()
  $('#event_end_date').pickadate()
  $('#notification_date').pickadate()
  return
