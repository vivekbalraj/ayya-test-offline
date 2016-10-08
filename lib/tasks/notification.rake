namespace :notification do
  desc "todays message"
  task send_message: :environment do
    gcm = FCM.new("AIzaSyAvt2J0-5KLDXD1G6mSQfLTstAQ3P7mc8E")
    registration_ids = Device.all().map(&:token)
    notification = Notification.today.where(is_published: false).first
    if (notification)
      options = {
        "collapse_key" => "message",
        "delay_while_idle" => true,
        :data => {
          "message" => notification.message,
          "summaryText" => notification.message,
          "title" => notification.title
        }
      }

      if notification.picture.url != "/pictures/original/missing.png"
        options[:data][:style] = "picture"
        options[:data][:picture] = notification.picture.url
      end
      response = gcm.send_notification(registration_ids, options)
      puts response
      notification.is_published = true;
      notification.save
      if (response[:not_registered_ids])
        Device.where(token: response[:not_registered_ids]).destroy_all
      end
    end
  end

  desc "events happening today"
  task send_event: :environment do
    gcm = GCM.new("AIzaSyAvt2J0-5KLDXD1G6mSQfLTstAQ3P7mc8E")
    registration_ids = Device.all().map(&:token)
    event = Event.today.first
    if (event)
      options = {
        "collapse_key" => "event",
        "delay_while_idle" => true,
        :data => {
          "message" => event.description,
          "summaryText" => event.temple.name,
          "title" => event.name,
          "temple" => event.temple.id
        }
      }

      response = gcm.send_notification(registration_ids, options)
      if (response[:not_registered_ids])
        Device.where(token: response[:not_registered_ids]).destroy_all
      end
    end
  end

end
