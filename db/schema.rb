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

ActiveRecord::Schema.define(version: 20160228131047) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string   "contact_person"
    t.string   "country",                                  null: false
    t.string   "state",                                    null: false
    t.string   "district",                                 null: false
    t.string   "taluk"
    t.string   "village"
    t.integer  "pincode"
    t.text     "street_address"
    t.decimal  "latitude",       precision: 15, scale: 13
    t.decimal  "longitude",      precision: 15, scale: 13
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
  end

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
    t.integer  "temple_id"
  end

  add_index "cars", ["temple_id"], name: "index_cars_on_temple_id", using: :btree

  create_table "devices", force: :cascade do |t|
    t.string   "token",                     null: false
    t.boolean  "enabled",    default: true, null: false
    t.string   "platform",                  null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "events", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description"
    t.date     "date",        null: false
    t.string   "tamil_month"
    t.integer  "tamil_date"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "temple_id"
  end

  add_index "events", ["temple_id"], name: "index_events_on_temple_id", using: :btree

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
    t.integer  "running_generation"
    t.string   "contact_person"
    t.string   "country"
    t.string   "state"
    t.string   "taluk"
    t.integer  "pincode"
    t.text     "street_address"
  end

  create_table "testimonials", force: :cascade do |t|
    t.string   "name",       null: false
    t.text     "text",       null: false
    t.string   "village"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "cars", "temples"
  add_foreign_key "events", "temples"
end
