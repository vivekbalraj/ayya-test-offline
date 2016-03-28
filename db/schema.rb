# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160328034615) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin_users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "admin_users", ["email"], name: "index_admin_users_on_email", unique: true, using: :btree
  add_index "admin_users", ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true, using: :btree

  create_table "cars", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "devices", force: :cascade do |t|
    t.string   "token",                     null: false
    t.boolean  "enabled",    default: true, null: false
    t.string   "platform",                  null: false
    t.date     "date",                      null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "events", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description"
    t.date     "start_date"
    t.string   "tamil_month"
    t.integer  "tamil_date"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "temple_id"
    t.date     "end_date"
    t.integer  "no_of_days"
    t.string   "day"
    t.integer  "n"
  end

  add_index "events", ["temple_id"], name: "index_events_on_temple_id", using: :btree

  create_table "notifications", force: :cascade do |t|
    t.text     "message",                              null: false
    t.string   "title"
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
    t.boolean  "is_published",         default: false, null: false
    t.date     "date",                                 null: false
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
  end

  create_table "temples", force: :cascade do |t|
    t.string   "name",                                                             null: false
    t.text     "information"
    t.string   "temple_type",                                  default: "Thangal", null: false
    t.string   "village"
    t.string   "district"
    t.decimal  "latitude",           precision: 15, scale: 13
    t.decimal  "longitude",          precision: 15, scale: 13
    t.datetime "created_at",                                                       null: false
    t.datetime "updated_at",                                                       null: false
    t.string   "founded_at"
    t.string   "contact_person"
    t.string   "country"
    t.string   "state"
    t.string   "taluk"
    t.integer  "pincode"
    t.text     "street_address"
    t.string   "img1_file_name"
    t.string   "img1_content_type"
    t.integer  "img1_file_size"
    t.datetime "img1_updated_at"
    t.string   "img2_file_name"
    t.string   "img2_content_type"
    t.integer  "img2_file_size"
    t.datetime "img2_updated_at"
    t.string   "img3_file_name"
    t.string   "img3_content_type"
    t.integer  "img3_file_size"
    t.datetime "img3_updated_at"
    t.boolean  "is_primary_thangal",                           default: false
    t.boolean  "is_book_read",                                 default: false
    t.string   "mobile_number"
    t.string   "book_month"
    t.boolean  "is_published",                                 default: false
    t.string   "priest_name"
    t.string   "facebook_page_url"
    t.string   "contact_email"
  end

  create_table "temples_cars", force: :cascade do |t|
    t.integer  "temple_id"
    t.integer  "car_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "temples_cars", ["car_id"], name: "index_temples_cars_on_car_id", using: :btree
  add_index "temples_cars", ["temple_id"], name: "index_temples_cars_on_temple_id", using: :btree

  create_table "testimonials", force: :cascade do |t|
    t.string   "name",       null: false
    t.text     "text",       null: false
    t.string   "village"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "events", "temples"
end
