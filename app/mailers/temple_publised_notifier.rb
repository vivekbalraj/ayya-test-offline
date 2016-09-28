class TemplePublishedNotifier < ApplicationMailer
  def send_temple_published(temple)
    @temple = temple
    mail( :to => temple.contact_email, :subject => 'Your temple has been published')
  end
end
