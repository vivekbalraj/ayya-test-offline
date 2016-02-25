ActiveAdmin.register Temple do

  permit_params :name, :temple_type, :information, :village, :latitude, :longitude, :district

  filter :district, :as => :select, :collection => ["அரியலூர்", "சென்னை", "கோயம்புத்தூர்", "கடலூர்", "தர்மபுரி", "திண்டுக்கல்", "ஈரோடு", "காஞ்சிபுரம்", "கன்னியாகுமரி", "கரூர்", "கிருஷ்ணகிரி", "மதுரை", "நாகப்பட்டினம்", "நாமக்கல்", "பெரம்பலூர்", "புதுக்கோட்டை", "இராமநாதபுரம்", "சேலம்", "சிவகங்கை", "தஞ்சாவூர்", "தேனி", "நீலகிரி", "திருநெல்வேலி", "திருவள்ளூர்", "திருவண்ணாமலை", "திருவாரூர்", "தூத்துக்குடி", "திருச்சிராப்பள்ளி", "திருப்பூர்", "வேலூர்", "விழுப்புரம்", "விருதுநகர்"]

  filter :temple_type, :as => :select, :collection => ["Pathi", "Thangal"]

  index do
    id_column
    column :name
    column :temple_type
    column :village
    column :district
    column :latitude
    column :longitude
    actions
  end

  form do |f|
    f.semantic_errors
    f.inputs "Temple" do
      f.input :name
      f.input :temple_type, :as => :select, :collection => ["Pathi", "Thangal"], :include_blank => false
      f.input :information
      f.input :village
      f.input :district, :as => :select, :collection => ["அரியலூர்", "சென்னை", "கோயம்புத்தூர்", "கடலூர்", "தர்மபுரி", "திண்டுக்கல்", "ஈரோடு", "காஞ்சிபுரம்", "கன்னியாகுமரி", "கரூர்", "கிருஷ்ணகிரி", "மதுரை", "நாகப்பட்டினம்", "நாமக்கல்", "பெரம்பலூர்", "புதுக்கோட்டை", "இராமநாதபுரம்", "சேலம்", "சிவகங்கை", "தஞ்சாவூர்", "தேனி", "நீலகிரி", "திருநெல்வேலி", "திருவள்ளூர்", "திருவண்ணாமலை", "திருவாரூர்", "தூத்துக்குடி", "திருச்சிராப்பள்ளி", "திருப்பூர்", "வேலூர்", "விழுப்புரம்", "விருதுநகர்"], :include_blank => false
      f.input :latitude
      f.input :longitude
    end
    f.actions
  end

end
