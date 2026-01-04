use std::ffi::{CStr, CString};
use std::os::raw::c_char;

#[no_mangle]
pub extern "C" fn rust_get_username() -> *mut c_char {
    match crate::backend_db::user_app() {
        Ok(username) => {
            CString::new(username).unwrap().into_raw()
        }
        Err(_) => CString::new("Error").unwrap().into_raw(),
    }
}

#[no_mangle]
pub extern "C" fn rust_free_string(s: *mut c_char) {
    if !s.is_null() {
        unsafe {
            let _ = CString::from_raw(s);
        }
    }
}

#[no_mangle]
pub extern "C" fn rust_change_username(new_name: *const c_char) -> bool {
    if new_name.is_null() {
        return false;
    }

    let c_str = unsafe { CStr::from_ptr(new_name) };
    let name = match c_str.to_str() {
        Ok(s) => s.to_string(),
        Err(_) => return false,
    };

    crate::backend_db::change_username(name).is_ok()
}
