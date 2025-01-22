// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use tauri::{generate_handler};
use serde_json::Value;

#[tauri::command]
fn greet(das: Value) -> Value {
    //format!("Hello, {}! You've been greeted from Rust!", name)
    das
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
