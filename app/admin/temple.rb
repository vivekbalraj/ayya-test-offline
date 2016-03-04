ActiveAdmin.register Temple do

  permit_params :name, :temple_type, :information, :village, :latitude, :longitude, :district, :founded_at, :contact_person, :country, :state, :taluk, :pincode, :street_address, :img1, :img2, :img3, :is_primary_thangal, :is_book_read, :is_published, :book_month, :mobile_number

  filter :temple_type, :as => :select, :collection => ["Pathi", "Thangal"]
  filter :district, :as => :select
  filter :is_primary_thangal
  filter :is_book_read
  filter :is_published

  index do
    id_column
    column :name
    column :temple_type
    column :village
    column :district
    column :latitude
    column :longitude
    column :founded_at
    column :is_primary_thangal
    column :is_published
    column :mobile_number
    actions
  end

  form do |f|
    f.semantic_errors
    f.inputs "Temple" do
      f.input :name
      f.input :temple_type, :as => :select, :collection => ["Pathi", "Thangal"], :include_blank => false
      f.input :founded_at
      f.input :is_published
      f.input :is_primary_thangal
      f.input :is_book_read
      f.input :information
      f.input :book_month, :as => :select, :collection => ["சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஆவணி", "புரட்டாசி", "ஐப்பசி", "கார்த்திகை", "மார்கழி", "தை", "மாசி", "பங்குனி"], :include_blank => true
      # f.input :cars
      f.input :contact_person
      f.input :mobile_number
      f.input :village
      f.input :taluk
      f.input :district, :as => :select, :collection => ["அரியலூர்", "சென்னை", "கோயம்புத்தூர்", "கடலூர்", "தர்மபுரி", "திண்டுக்கல்", "ஈரோடு", "காஞ்சிபுரம்", "கன்னியாகுமரி", "கரூர்", "கிருஷ்ணகிரி", "மதுரை", "நாகப்பட்டினம்", "நாமக்கல்", "பெரம்பலூர்", "புதுக்கோட்டை", "இராமநாதபுரம்", "சேலம்", "சிவகங்கை", "தஞ்சாவூர்", "தேனி", "நீலகிரி", "திருநெல்வேலி", "திருவள்ளூர்", "திருவண்ணாமலை", "திருவாரூர்", "தூத்துக்குடி", "திருச்சிராப்பள்ளி", "திருப்பூர்", "வேலூர்", "விழுப்புரம்", "விருதுநகர்"], :include_blank => false
      f.input :state, :as => :select, :collection => ["தமிழ்நாடு"], :include_blank => false
      f.input :country, :as => :select, :collection => ["இந்தியா"], :include_blank => false
      f.input :latitude
      f.input :longitude
      f.input :pincode
      f.input :street_address
      f.input :img1, :as => :file, :hint => image_tag(f.object.img1.url)
      f.input :img2, :as => :file, :hint => image_tag(f.object.img2.url)
      f.input :img3, :as => :file, :hint => image_tag(f.object.img3.url)
    end
    f.actions
  end

end
