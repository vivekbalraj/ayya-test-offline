class TempleNotifier < ApplicationMailer
  def send_temple_email(temple)
    @temple = temple
    mail( :to => 'contact.ayya1008@gmail.com', :subject => 'A new temple has been added')
  end
end
