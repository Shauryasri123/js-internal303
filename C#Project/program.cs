using System;

// Base class for all patients (Abstraction)
abstract class Patient
{
    public int PatientId { get; }
    public string Name { get; }
    public int Age { get; }
    public string DoctorAssigned { get; }
    public int WardNumber { get; }
    public DateTime AdmitTime { get; }

    protected Patient(int id, string name, int age, string doctor, int ward)
    {
        PatientId = id;
        Name = name;
        Age = age;
        DoctorAssigned = doctor;
        WardNumber = ward;
        AdmitTime = DateTime.Now;
    }

    // Common methods for all patients
    public abstract double GetBaseCharge();
    public abstract string PatientType { get; }
}

// General patient class
class GeneralPatient : Patient
{
    public GeneralPatient(int id, string name, int age, string doctor, int ward)
        : base(id, name, age, doctor, ward) { }

    public override double GetBaseCharge() => 1000;
    public override string PatientType => "General";
}

// Emergency patient class
class EmergencyPatient : Patient
{
    public EmergencyPatient(int id, string name, int age, string doctor, int ward)
        : base(id, name, age, doctor, ward) { }

    public override double GetBaseCharge() => 3000;
    public override string PatientType => "Emergency";
}

// Delegate for billing logic
delegate double BillingStrategy(double amount);

// Event data class
class BillEventArgs : EventArgs
{
    public int PatientId { get; set; }
    public string Name { get; set; }
    public string PatientType { get; set; }
    public int WardNumber { get; set; }
    public double FinalBill { get; set; }
}

// Hospital class (Event Publisher)
class Hospital
{
    public event EventHandler<BillEventArgs> BillGenerated;

    public void AdmitPatient(Patient patient, BillingStrategy billing)
    {
        double baseAmount = patient.GetBaseCharge();
        double finalBill = billing(baseAmount);

        Console.WriteLine("\n---- Patient Bill ----");
        Console.WriteLine($"ID     : {patient.PatientId}");
        Console.WriteLine($"Name   : {patient.Name}");
        Console.WriteLine($"Type   : {patient.PatientType}");
        Console.WriteLine($"Doctor : {patient.DoctorAssigned}");
        Console.WriteLine($"Ward   : {patient.WardNumber}");
        Console.WriteLine($"Bill   : Rs.{finalBill}");

        // Raise event after bill generation
        BillGenerated?.Invoke(this, new BillEventArgs
        {
            PatientId = patient.PatientId,
            Name = patient.Name,
            PatientType = patient.PatientType,
            WardNumber = patient.WardNumber,
            FinalBill = finalBill
        });
    }
}

// Pharmacy department
class Pharmacy
{
    public void Notify(object sender, BillEventArgs e)
    {
        Console.WriteLine($"[Pharmacy] Medicines ready for {e.Name}");
    }
}

// Accounts department
class Accounts
{
    public void Notify(object sender, BillEventArgs e)
    {
        Console.WriteLine($"[Accounts] Collect Rs.{e.FinalBill}");
    }
}

// Main program
class Program
{
    static void Main()
    {
        Hospital hospital = new Hospital();

        // Event subscribers
        hospital.BillGenerated += new Pharmacy().Notify;
        hospital.BillGenerated += new Accounts().Notify;

        Console.Write("Patient ID: ");
        int id = int.Parse(Console.ReadLine());

        Console.Write("Name: ");
        string name = Console.ReadLine();

        Console.Write("Age: ");
        int age = int.Parse(Console.ReadLine());

        Console.Write("Doctor: ");
        string doctor = Console.ReadLine();

        Console.Write("Ward No: ");
        int ward = int.Parse(Console.ReadLine());

        Console.WriteLine("1. General\n2. Emergency");
        int type = int.Parse(Console.ReadLine());

        // Runtime polymorphism
        Patient patient = type == 1
            ? new GeneralPatient(id, name, age, doctor, ward)
            : new EmergencyPatient(id, name, age, doctor, ward);

        Console.WriteLine("1. 10% Tax\n2. 5% Discount");
        int billChoice = int.Parse(Console.ReadLine());

        // Delegate usage
        BillingStrategy billing =
            billChoice == 1 ? a => a * 1.10 : a => a * 0.95;

        hospital.AdmitPatient(patient, billing);
        Console.ReadKey();
    }
}
