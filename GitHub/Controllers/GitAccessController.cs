using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GitHub.Controllers
{
    public class GitAccessController : Controller
    {
        //
        // GET: /GitAccess/
        public ActionResult Index()
        {
            return View();
        }

        //
        // GET: /GitAccess/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /GitAccess/Create
        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /GitAccess/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /GitAccess/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /GitAccess/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /GitAccess/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /GitAccess/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
