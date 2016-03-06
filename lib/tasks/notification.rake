namespace :notification do
  desc "todays message"
  task send_message: :environment do
    gcm = GCM.new("AIzaSyDi8ducYJNid4NQUKm04HzmDrdScGqO1NE")
    registration_id = Device.all().map(&:token)
    notification = Notification.today.first
    options = {
      "collapse_key" => "updated_state",
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
    response = gcm.send_notification(registration_id, options)
    p response[:not_registered_ids]
    Device.where(token: response[:not_registered_ids]).destroy_all
  end

  desc "TODO"
  task send_event: :environment do
  end

end
